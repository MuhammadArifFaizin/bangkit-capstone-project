package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityResultPsBinding

class ResultPs : AppCompatActivity() {

    private lateinit var binding:ActivityResultPsBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityResultPsBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_result_ps)

        binding.btnResultps.setOnClickListener{
            startActivity(Intent(this@ResultPs, HomepageActivity::class.java))
        }
    }
}