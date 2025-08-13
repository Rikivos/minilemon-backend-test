export function errorHandler(err,res) {
    console.error(err);

    if (err.name === "ValidationError") {
        return res.status(400).json({ success: false, message: err.message });
    }

    if (err.name === "NotFoundError") {
        return res.status(404).json({ success: false, message: err.message });
    }

    if (err.code === 11000) { 
        return res.status(400).json({
            success: false,
            message: `Duplicate key: ${JSON.stringify(err.keyValue)}`
        });
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
}
