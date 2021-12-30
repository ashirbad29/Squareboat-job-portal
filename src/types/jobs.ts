export type jobPostType = {
  title: string;
  description: string;
  location: string;
};

export type jobType = jobPostType & { id: string };

export type candidateType = {
  name: string;
  email: string;
  id: string;
  skills: string;
};
