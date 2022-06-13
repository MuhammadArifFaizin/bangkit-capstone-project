package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityResultNeutralBinding

class ResultNeutral : AppCompatActivity() {

    private lateinit var binding:ActivityResultNeutralBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityResultNeutralBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_result_neutral)

        binding.btnResultneutral.setOnClickListener{
            startActivity(Intent(this@ResultNeutral, HomepageActivity::class.java))
        }

    }
}