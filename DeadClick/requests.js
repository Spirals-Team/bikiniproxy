db.exceptions.aggregate([
    { "$unwind": "$error.stack" },
    {
    $group: {
        "_id": "$_id",
        "message": { "$first": "$error.message" },
        "line": { "$first": "$error.stack.line" },
        "column": { "$first": "$error.stack.column" },
        "file": { "$first": "$error.stack.file" }
    }
    },
    {
        $group: {
            _id: {
                "message": "$message",
                "line": "$line",
                "column": "$column",
                "file": "$file"
            },
            count: {$sum: 1}
        }
    },
    {
        $sort:{count: -1}
    }
]);

db.exceptions.aggregate([
    {
        $group: {
            _id: {
                "message": "$error.message",
                "line": "$error.line",
                "column": "$error.column",
                "file": "$error.file"
            },
            count: {$sum: 1}
        }
    },
    {
        $sort:{count: -1}
    }
]);

db.exceptions.aggregate([
    {
        $lookup: {
            from: "pages",
            localField: "pageId",
            foreignField: "uuid",
            as: "pages"
        }
    },
    {
        $group: {
            _id: {
                "message": "$error.message",
                "line": "$error.line",
                "column": "$error.column",
                "file": "$error.file"
            },
            count: {$sum: 1},
            pages: {
                "$addToSet":    { "$arrayElemAt": [ "$pages", 0 ] }
            }
        }
    }]);