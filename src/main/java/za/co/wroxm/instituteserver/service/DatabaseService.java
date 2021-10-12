package za.co.wroxm.instituteserver.service;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import za.co.wroxm.instituteserver.users.Admin;
import za.co.wroxm.instituteserver.users.DeptCollector;
import za.co.wroxm.instituteserver.users.Student;
import za.co.wroxm.instituteserver.users.User;

import io.jsonwebtoken.Claims;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class DatabaseService {
    static ConcurrentHashMap<String, User> loggedUsers = new ConcurrentHashMap<String, User>();
    static ConcurrentHashMap<String, Object> users = new ConcurrentHashMap<String, Object>();


    static ConcurrentHashMap<String, Object> collectedDepts = new ConcurrentHashMap<String, Object>();
    static ConcurrentHashMap<String, Object> anouncements = new ConcurrentHashMap<String, Object>();
    static ConcurrentHashMap<String, Object> campuses = new ConcurrentHashMap<String, Object>();

    DatabaseInitialize init =new DatabaseInitialize();
    final Connection connection = init.getConnection();
    
    public boolean createUser( User user)throws SQLException{
        try( final Statement stmt = connection.createStatement() ){ 
            boolean gotAResultSet = stmt.execute("INSERT INTO test3(name, last_name) VALUES (\"Munich\", \"malt\")" ); 
            if( gotAResultSet ){
                throw new RuntimeException( "Unexpectedly got a SQL resultset." );
            }else{
                final int updateCount = stmt.getUpdateCount();  
                if( updateCount == 1 ){
                    System.out.println( "1 row INSERTED into ingredients" );
                    return true;
                }else{
                    throw new RuntimeException( "Expected 1 row to be inserted, but got " + updateCount );
                }
             }

        }

    }

    public CreateResponse register(User user){
        System.out.println(user);
        if (user.getUsername() == null || user.getName() == null || user.getPassword() == null || user.getRoles() == null){
            return CreateResponse.INCOMPLETE_FORM;
        }else if (!users.containsKey(user.getUsername()) ){
            switch (user.getRoles()) {
                case "admin":
                    users.put(user.getUsername(), user);
                    return CreateResponse.SUCCESS;
                    
                case "student":
                    users.put(user.getUsername(),  user);
                    return CreateResponse.SUCCESS;
                case "collector":
                    users.put(user.getUsername(),  user);
                    return CreateResponse.SUCCESS;
                default:
                    return CreateResponse.NOT_ALLOWED;
                
                
                
            }
        } else{
            return CreateResponse.ACCOUNT_EXIST;
        }
    }
    

    public boolean deleteUser(String token) {
        Jws<Claims> parseClaimsJws = Jwts.parser().setSigningKey("MTIzNDU2Nzg=").parseClaimsJws(token);
        if (loggedUsers.containsKey(parseClaimsJws.getSignature())){
            User user = loggedUsers.get(parseClaimsJws.getSignature());
            users.remove(user.getUsername());
            loggedUsers.remove(parseClaimsJws.getSignature());
        }
        // users.remove(user.getUsername());
        return true;
    }

    public boolean updateUser(User user){

        return false;
    }

    public String login(User user){
        System.out.println(user);
        try{if (users.containsKey(user.getUsername())){
            System.out.println(user);
            String token = new Auth().generateTokenString((User)users.get(user.getUsername()));
            Jws<Claims> parseClaimsJws = Jwts.parser().setSigningKey("MTIzNDU2Nzg=").parseClaimsJws(token);
            loggedUsers.put(parseClaimsJws.getSignature(), user);
            return token;
            }}catch (Exception e){}
            return null;
    }

    public boolean logout(String token){
        try{
        Jws<Claims> parseClaimsJws = Jwts.parser().setSigningKey("MTIzNDU2Nzg=").parseClaimsJws(token);
        if (loggedUsers.contains(parseClaimsJws.getSignature())){
            loggedUsers.remove(parseClaimsJws.getSignature());
            return true;
            }
        }catch(SignatureException e){}
        return false;
    }

    public User getUser(String token) {
        try{
        Jws<Claims> parseClaimsJws = Jwts.parser().setSigningKey("MTIzNDU2Nzg=").parseClaimsJws(token);
        User user =loggedUsers.get(parseClaimsJws.getSignature());
        return user;
    }catch (Exception e){}
        return null;
    }


}