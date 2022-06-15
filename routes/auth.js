import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is auth endpoint")
})
router.get("/reg", (req, res) => {
    res.send("This is reg endpoint")
})

export default router;