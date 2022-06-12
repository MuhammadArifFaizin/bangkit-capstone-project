package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityCautionBinding

class CautionActivity : AppCompatActivity() {
    private lateinit var binding: ActivityCautionBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityCautionBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_caution)

        binding.btnStarttest.setOnClickListener{
            startActivity(Intent(this@CautionActivity, Test1Activity::class.java))
        }
    }
}