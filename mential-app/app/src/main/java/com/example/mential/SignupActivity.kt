package com.example.mential

import android.app.DatePickerDialog
import android.os.Bundle
import android.widget.ArrayAdapter
import androidx.appcompat.app.AppCompatActivity
import com.example.mential.databinding.ActivitySignupBinding
import java.util.*

class SignupActivity : AppCompatActivity() {
    private lateinit var binding:ActivitySignupBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySignupBinding.inflate(layoutInflater)
        setContentView(binding.root)

        //Gender
        val gender = arrayOf(
            "Gender",
            "Female",
            "Male"
        )
        val spinnerArrayAdapter = ArrayAdapter(
            this, R.layout.dropdown_item, gender
        )
        spinnerArrayAdapter.setDropDownViewResource(R.layout.dropdown_item)
        binding.spinnerGender.adapter = spinnerArrayAdapter

        //DateBirth
        val cal = Calendar.getInstance()
        val myYear = cal.get(Calendar.YEAR)
        val myMonth = cal.get(Calendar.MONTH)
        val day = cal.get(Calendar.DAY_OF_MONTH)

        binding.pickDateBirth.setOnClickListener {
            val datePickerDialog = DatePickerDialog(this, R.style.DialogTheme, DatePickerDialog.OnDateSetListener { view, year, month, dayOfMonth ->
                //binding.pickDateBirth.text = dayOfMonth + "/" + (month +1) + "/" +year
                binding.pickDateBirth.setText(String.format("%02d-%02d",dayOfMonth,month + 1) + "-" + year)
            },myYear, myMonth, day)
            datePickerDialog.show()
        }
    }



}