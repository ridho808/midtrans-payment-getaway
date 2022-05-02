import Product from "../model/Product.js";
import Midtrans from 'midtrans-client';
import Order from "../model/Payment.js";


const Core_Api = new Midtrans.CoreApi({
    isProduction: false,
    serverKey : x,
    clientKey : x
})

export const GetAllProduct= async (req,res)=>{
    try {
        const Data = await Product.findAll();
        res.json({
            "Massage" : "Data ditampilkan",
            "Data" : Data,
        });
    } catch (error) {
        console.log(error)
    }
};

export const PostData = async(req,res)=>{
    try {
        const {Barang,Price}= req.body;
        await Product.create({
            Barang : Barang,
            Price : Price,
        });
        console.log(req.body);
        res.json({msg : "berhasil"})
    } catch (error) {
        res.json(error)
    }
};

// //////////////////////////////////////
export const DataOrder= async (req,res)=>{
    try {
        const data = await Order.findAll();
        res.json(data)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
};

export const OrderBarang = async (req,res)=>{
    try {
        Core_Api.charge(req.body).then((chargeResponse)=>{
            const DataOrder = {
                id : chargeResponse.order_id,
                nama : req.body.nama,
                Barang_id : req.body.Barang_id,
                Res_Midtrans : JSON.stringify(chargeResponse),
            }
            Order.create(DataOrder).then((data)=>{
                res.json({
                    pesan : "berhasil",
                    DATA : data
                })
            })
        })
    } catch (error) {
        console.log(error)
    }
}