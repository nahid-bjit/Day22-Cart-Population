//const { validationResult } = require("express-validator");
//const ProductModel = require("../model/Product");
const { success, failure } = require("../util/common");
//const { insertInLog } = require("../server/logFile");
const OrderModel = require("../model/Order");
// const User = require("../model/User");
const HTTP_STATUS = require("../constants/statusCodes")


class OrderController {
    // async getAll(req, res) {
    //     console.log("controller")
    //     try {
    //         const orders = await OrderModel.find({});
    //         if (orders.length > 0) {
    //             return res
    //                 .status(HTTP_STATUS.OK)
    //                 .send(success("Successfully received all users", { result: orders, total: orders.length }));
    //         }
    //         return res.status(HTTP_STATUS.OK).send(success("No products were found"));
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(failure("Internal server error"));

    //     }
    // }

    // async getOneById(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const order = await OrderModel.findById({ _id: id });
    //         if (product) {
    //             return res.status(HTTP_STATUS.OK).send(success("Successfully received the product", order));
    //         } else {
    //             return res.status(HTTP_STATUS.OK).send(failure("Failed to received the product"));
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(failure("Internal server error"));
    //     }
    // }

    async create(req, res) {
        try {
            //  const validation = validationResult(req).array();
            // if (validation.length > 0) {
            //     return res.status(HTTP_STATUS.OK).send(failure("Failed to add the user", validation));
            // }
            const { user, products } = req.body;
            const order = new OrderModel({ user, products });
            // Using the then and catch to handle separate responses on success and failure
            await order
                .save()
                .then((data) => {
                    return res.status(HTTP_STATUS.OK).send(success("Successfully added the user", data));
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).send(failure("Failed to add the user"));
                });
        } catch (error) {
            console.log(error);
            return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(failure("Internal server error"));
        }
    }

    // async deletetById(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const result = await ProductModel.deleteOne({ _id: id });

    //         if (result.deletedCount > 0) {
    //             return res.status(200).send(success("Successfully deleted the product"));
    //         } else {
    //             return res.status(400).send(failure("Data not found"));
    //         }
    //     } catch (error) {
    //         return res.status(500).send(failure("Internal server error"));
    //     }
    // }

    // async updateById(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const updatedData = req.body;

    //         // Check if the document exists before updating
    //         const existingDocument = await ProductModel.findOne({ _id: id });

    //         if (!existingDocument) {
    //             return res.status(400).send(failure("Document not found"));
    //         }

    //         const result = await ProductModel.updateOne({ _id: id }, { $set: updatedData });

    //         if (result.nModified > 0) {
    //             return res.status(200).send(success("Successfully updated the product"));
    //         } else {
    //             return res.status(400).send(failure("No changes made"));
    //         }
    //     } catch (error) {
    //         console.log("error: ", error);
    //         return res.status(500).send(failure("Internal server error"));
    //     }
    // }




    // async deletetById(req, res) {
    //     try {
    //         //console.log("request body: ", req.body)
    //         const { id } = req.params;
    //         //console.log(id);
    //         const result = await ProductModel.deleteOne({ _id: id });
    //         console.log("findData ki pathaiche?: ", result)

    //         if (result.success) {
    //             return res.status(200).send(success("Successfully deleted the prodtuct"));
    //         }
    //         else {
    //             return res.status(400).send(failure("Data not found"));
    //         }
    //     } catch (error) {
    //         return res.status(500).send(failure("Internal server error"));
    //     }
    // }

    // async getOneById(req, res) {
    //     try {
    //         const { id } = req.params;
    //         console.log(id);
    //         const result = await ProductModel.getOneById(id);
    //         console.log("kichu ekta: ", result)

    //         if (result.success) {
    //             return res.status(200).send(success("Successfully received the prodtuct details", result.data));
    //         }
    //         else {
    //             return res.status(400).send(failure("No data found"));
    //         }
    //     } catch (error) {
    //         return res.status(500).send(failure("Internal server error"));
    //     }
    // }

    // async deletetById(req, res) {
    //     try {
    //         //console.log("request body: ", req.body)
    //         const { id } = req.params;
    //         //console.log(id);
    //         const result = await ProductModel.deletetById(id);
    //         // console.log("findData ki pathaiche?: ", result)
    //         if (result.success) {
    //             return res.status(200).send(success("Successfully deleted the prodtuct"));
    //         }
    //         else {
    //             return res.status(400).send(failure("Data not found"));
    //         }
    //     } catch (error) {
    //         return res.status(500).send(failure("Internal server error"));
    //     }
    // }



    // async create(req, res) {
    //     // console.log("request body", req.body)
    //     try {
    //         const validation = validationResult(req).array();
    //         console.log(validation);
    //         if (validation.length === 0) {
    //             const product = req.body;
    //             // console.log("prodcut asche?", product)
    //             const result = await ProductModel.add(product);
    //             if (result.success) {
    //                 return res.status(200).send(success("Successfully added the product", product.data));
    //             } else {
    //                 return res.status(200).send(failure("Failed to add the product"));
    //             }
    //         } else {
    //             return res.status(422).send(failure("Invalid inputs provided", validation));
    //         }
    //     } catch (error) {
    //         // console.log("error kita? ", error)
    //         return res.status(500).send(failure("Internal server error"));

    //     }
    // }

    // async updateById(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const updateProduct = req.body;
    //         const result = await ProductModel.updateById(id, updateProduct);

    //         if (result.success) {
    //             return res.status(200).send(success("Successfully updated the product"));
    //         } else {
    //             return res.status(400).send(failure(result.message));
    //         }
    //     } catch (error) {
    //         return res.status(500).send(failure("Internal server error"));
    //     }
    // }




}

module.exports = new OrderController();

