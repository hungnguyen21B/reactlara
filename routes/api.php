<?php

use Illuminate\Http\Request;
use Illuminate\Http\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
// */

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/','AdminController@indexAdmin');
Route::get('get-product/{id}','AdminController@getOneProduct');
Route::post('insert','AdminController@insertProduct');
Route::put('edit/{id}','AdminController@editProduct');
Route::delete('delete/{id}','AdminController@deleteProduct');
//*****************************************************************//
