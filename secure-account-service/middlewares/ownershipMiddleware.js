module.exports = (req, res, next) => {
    if (req.params.userId !== req.user.id) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};