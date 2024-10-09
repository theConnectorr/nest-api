import { Injectable } from "@nestjs/common";
// import { PrismaService } from "src/prisma/prisma.service";

export type Learner = {
  id: number;
  username: string;
  hashedPass: string;
  email: string;
}

@Injectable()
export class LearnersService {
  // constructor(private prisma: PrismaService) {}

  learners : Learner[] = [
    {
      id: 1,
      username: "user1",
      hashedPass: "user1",
      email: "user1@ricourse.com",
    },
    {
      id: 2,
      username: "user2",
      hashedPass: "user2",
      email: "user2@ricourse.com",
    },
    {
      id: 3,
      username: "user3",
      hashedPass: "user3",
      email: "user3@ricourse.com",
    },
    {
      id: 4,
      username: "user4",
      hashedPass: "user4",
      email: "user4@ricourse.com",
    },
    {
      id: 5,
      username: "user5",
      hashedPass: "user5",
      email: "user5@ricourse.com",
    },
  ];

  async findOne(username: string) : Promise<Learner | undefined> {
    return this.learners.find(learner => learner.username === username);
  }
}
