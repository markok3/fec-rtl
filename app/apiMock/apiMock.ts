export const cardData = [
  {
    title: "Total Points",
    subtitle: "This month",
    value: "1,000",
    change: "+100",
  },
  {
    title: "Total Cards",
    subtitle: "This month",
    value: "500",
    change: "+50",
  },
  {
    title: "Total Visits",
    subtitle: "This month",
    value: "2,000",
    change: "+200",
  },
];

export type User = {
  id: string;
  index: number;
  name: string;
  creationDate?: string;
  points: number;
  email?: string;
  gender?: string;
};

export const userData: User[] = [
  {
    id: "m5gr84i9",
    index: 1,
    points: 316,
    email: "ken99@yahoo.com",
    name: "Ken",
    creationDate: "2022-01-01",
    gender: "male",
  },
  {
    id: "3u1reuv4",
    index: 2,
    points: 242,
    email: "Abe45@gmail.com",
    name: "Abe",
    creationDate: "2023-12-08",
    gender: "male",
  },
  {
    id: "derv1ws0",
    index: 3,
    points: 837,
    email: "Monserrat44@gmail.com",
    name: "Monserrat",
    creationDate: "2023-12-09",
    gender: "female",
  },
  {
    id: "5kma53ae",
    index: 4,
    points: 874,
    email: "Silas22@gmail.com",
    name: "Silas",
    creationDate: "2023-12-04",
    gender: "male",
  },
  {
    id: "bhqecj4p",
    index: 5,
    points: 721,
    email: "carmella@hotmail.com",
    name: "Carmella",
    creationDate: "2023-11-10",
    gender: "female",
  },
];
