<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUndecidedShiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('undecided_shifts', function (Blueprint $table) {
            $table->increments('undecided_shift_id');
            $table->unsignedBigInteger('user_id');
            $table->date('date');
            $table->time('enter_time');
            $table->time('exit_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('undecided_shifts');
    }
}
