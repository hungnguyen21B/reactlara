<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min:6|max:20',
            're_password'=>'required|same:password',
           
        ];
    }
    public function messages()
    {
        return [
            'name.required'=>'Vui lÃ²ng nháº­p tÃªn',
            'email.required'=>'Vui lÃ²ng nháº­p email',
            'email.email'=>'KhÃ´ng Ä‘Ãºng Ä‘á»‹nh dáº¡ng email',
            'email.unique'=>'Email Ä‘Ã£ cÃ³ ngÆ°á»i sá»­ dá»¥ng',
            'password.required'=>'Vui lÃ²ng nháº­p máº­t kháº©u',
            'password.min'=>'Máº­t kháº©u Ã­t nháº¥t 6 kÃ­ tá»±',
            're_password.required'=>'Máº­t kháº©u khÃ´ng giá»‘ng nhau',
            're_password.same'=>'Máº­t kháº©u khÃ´ng giá»‘ng nhau',
        ];
    }
}
