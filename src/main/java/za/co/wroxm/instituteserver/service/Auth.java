package za.co.wroxm.instituteserver.service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import org.json.JSONObject;
import org.json.JSONArray;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import za.co.wroxm.instituteserver.users.User;

import java.util.Date;
import java.time.Instant;
public class Auth {
    

    public String generateTokenString(User user){
        Instant d = new Date().toInstant().plusSeconds(1000);
		Date df =Date.from(d);

        String token = Jwts.builder().setSubject(user.getUsername())
        .setExpiration(df)
        .setIssuer("www.wrox-m.co.za")
        .claim("groups", user.getRoles())
        // HMAC using SHA-512  and 12345678 base64 encoded
        .signWith(SignatureAlgorithm.HS512, "MTIzNDU2Nzg=").compact();
        return token;
            }

    public boolean valid(String token){
        try{
        Jws<Claims> parseClaimsJws = Jwts.parser().setSigningKey("MTIzNDU2Nzg=").parseClaimsJws(token);
        
        JSONObject body = new JSONObject(parseClaimsJws.getBody());
        System.out.println(body);
        }catch(ExpiredJwtException e){
            return false;
        }
        return true;
    }
}
