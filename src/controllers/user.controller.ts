import { NextFunction, Request, Response } from "express";

function getUserList(req: Request, res: Response, next: NextFunction) {
  const responseData = {
    data: [
      {
        id: 1,
        name: "user 1",
        isAdmin: true,
        deleted: 0,
      },
      {
        id: 2,
        name: "user 222",
        isAdmin: false,
        deleted: 0,
      },
    ],
  };

  return res.status(200).json(responseData);
}

export default { getUserList };
