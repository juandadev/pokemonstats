/* eslint-disable no-multi-spaces */
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import {
  EFFECTS_COLORS,
  EFFECTS_EMOJIS,
  LETTERS_CHART,
  TYPES, WEAKNESS_CHART,
} from '../../common/constants';
import s from './Chart.module.scss';

export default function Chart() {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    setCells([...document.querySelectorAll('.chartCell')]);
  }, []);

  const handleMouseOver = (event) => {
    const { col, row } = event.target.dataset;
    const activeRows = cells
      .filter((cell) => cell.dataset.row === row);
    const activeCols = cells
      .filter((cell) => cell.dataset.col === col);

    cells.forEach((item) => item.classList.remove('activeCell'));
    activeRows.forEach((item) => item.classList.add('activeCell'));
    activeCols.forEach((item) => item.classList.add('activeCell'));
  };

  return (
    <>
      {WEAKNESS_CHART.map((row, indexRow) => (
        <Row key={`row-${indexRow}`} className={s.row}>
          {row.map((col, indexCol) => (
            <Button
              size="sm"
              key={`btn-${indexRow}${indexCol}`}
              className={`${(indexCol === 0 || col === -1) && s.typesRows} ${
                indexRow === 0 && col !== -1 && s.typesCols
              } ${s.button} chartCell`}
              style={{
                background:
                  (indexCol === 0 || indexRow === 0)
                  && col !== -1
                  && TYPES[col][1],
                border:
                  (indexCol === 0 || indexRow === 0)
                  && col !== -1
                  && TYPES[col][1],
              }}
              variant={col !== -1 ? EFFECTS_COLORS[col] : 'none'}
              data-col={LETTERS_CHART[indexCol]}
              data-row={indexRow}
              onMouseOver={handleMouseOver}
            >
              {(indexCol === 0 || indexRow === 0) && col !== -1
                ? TYPES[col][0]
                : EFFECTS_EMOJIS[col]}
            </Button>
          ))}
        </Row>
      ))}
    </>
  );
}
