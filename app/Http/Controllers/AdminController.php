<?php

namespace App\Http\Controllers;
use App\Product;
use App\TypeProduct;
use App\Bill;
use App\BillDetail;
use App\Color;
use App\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function indexAdmin(){
        return response()->json(Product::get());
    } 
    public function deleteProduct($id){
        return response()->json(Product::destroy($id));
    }
    public function getOneProduct($id){
        return response()->json(Product::find($id));
    }
}