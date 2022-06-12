package com.example.mential

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.mential.databinding.ActivityCautionBinding
import com.example.mential.databinding.ActivityLandingPage1Binding

class CautionActivity : AppCompatActivity() {
    private lateinit var binding: ActivityCautionBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_caution)

//        binding.btnSkip1.setOnClickListener{
//            startActivity(Intent(this@CautionActivity, Test1Activity::class.java))
//        }
    }
}