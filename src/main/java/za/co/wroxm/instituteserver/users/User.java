package za.co.wroxm.instituteserver.users;

import java.lang.reflect.Array;
import java.util.ArrayList;

import com.fasterxml.jackson.core.sym.Name;

public class  User {
    // String username;
    public String email;
    public ArrayList<String> roles;
    public String role;
    public String password;
    public String firstname;
    public String lastname;
    public String dob;
    public String student_no;
    public String id;
    public String cell;
    public String gender;
    public String address;
    public String city;
    public String region;
    public String country;
    public String course;

    public User(){

    }
    

    public void setPassword(String password) {
        this.password = password;
        
    }

    public String getPassword(){
        return this.password;
    }

    public String getUsername(){
        return this.email;
    }

    public String getName() {
        return this.firstname;
    }
    
    public String getRoles() {
        return this.role;
    }
}
