import EvolutionImage from './EvolutionImage';

function EvolutionImageVM(props) {
  const { details } = props;
  let notNullDetails = {};

  if (details) {
    const notNullEntries = Object.entries(details).filter(
      ([key, value]) => value !== null && key !== 'trigger'
    );

    notNullDetails = notNullEntries.reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
  }

  return <EvolutionImage {...props} details={notNullDetails} />;
}

export default EvolutionImageVM;
