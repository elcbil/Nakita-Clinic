<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;


Route::get('/', function () {
    return response()->json(['message' => 'Laravel backend is running!']);
});
