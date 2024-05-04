import expresss from "express";
import BlogsController  from "../controllers/BlogsController.js";

const router = expresss.Router();
const { getAll, addUser, updateUser, getSingleUser, deleteUser  } = new BlogsController();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my nodejs blog",
    data: {
      author: "Orutu Akposieyefa Williams",
      role: "Software Engineer",
    },
    sucess: true,
  });
});

router.get("/blogs", getAll);
router.post("/blogs/create", addUser);
router.patch("/blogs/update/(:id)", updateUser);
router.get("/blogs/single/(:id)", getSingleUser);
router.delete("/blogs/delete/(:id)", deleteUser);

export default router;
