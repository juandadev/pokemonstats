export type Waitlist = {
  id: string;
  email: string;
  source: string | null;
  status: StatusType;
  createdAt: Date;
};

export type StatusType = 'PENDING' | 'VERIFIED' | 'REJECTED';
