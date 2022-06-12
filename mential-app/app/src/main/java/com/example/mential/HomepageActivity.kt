package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityHomepageBinding

class HomepageActivity : AppCompatActivity() {
    private lateinit var binding: ActivityHomepageBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityHomepageBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.buttonHomepage.setOnClickListener{
            startActivity(Intent(this@HomepageActivity, Test1Activity::class.java))
        }
    }
}