export type Waitlist = {
  id: string;
  email: string;
  userAgent: string | null;
  ipAddress: string | null;
  source: string | null;
  status: StatusType;
  createdAt: Date;
};

export type StatusType = 'PENDING' | 'VERIFIED' | 'REJECTED';
