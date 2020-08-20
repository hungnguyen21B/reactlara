<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email'=>'required|email',
            'password'=>'required|min:6|max:20'
        ];
    }
    public function messages()
    {
        return [
            'email.required'=>'Vui lÃ²ng nháº­p email',
            'email.email'=>'Email khÃ´ng Ä‘Ãºng Ä‘á»‹nh dáº¡ng',
            'password.required'=>'Vui lÃ²ng nháº­p máº­t kháº©u',
            'password.min'=>'Máº­t kháº©u Ã­t nháº¥t 6 kÃ­ tá»±',
            'password.max'=>'Máº­t kháº©u khÃ´ng quÃ¡ 20 kÃ­ tá»±'
        ];
    }
}
