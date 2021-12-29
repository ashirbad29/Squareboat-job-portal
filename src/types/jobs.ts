export type jobPostType = {
  title: string;
  description: string;
  location: string;
};

export type jobType = jobPostType & { id: string };
