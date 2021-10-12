package za.co.wroxm.instituteserver;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.System.Logger;
import java.sql.Connection;
import java.sql.SQLException;
import java.time.Instant;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutionException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.rpc.context.AttributeContext.Request;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletResponse;
import ch.qos.logback.classic.joran.action.LoggerAction;
import io.grpc.netty.shaded.io.netty.handler.codec.http2.Http2Exception;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import za.co.wroxm.instituteserver.service.Auth;
import za.co.wroxm.instituteserver.service.CreateResponse;
import za.co.wroxm.instituteserver.service.DatabaseInitialize;
import za.co.wroxm.instituteserver.service.DatabaseService;
import za.co.wroxm.instituteserver.users.User;
@SpringBootApplication
@RestController
public class InstituteServerApplication {


	static DatabaseInitialize database = new DatabaseInitialize();

	static DatabaseService service;
	static Map<String, User> users = new HashMap<String, User>(); 
	public static void main(String[] args) throws IOException, FirebaseAuthException {
		String tok = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZGFtIiwiZXhwIjoxNjMzODE1NTQwLCJpc3MiOiJ3d3cud3JveC1tLmNvLnphIiwiZ3JvdXBzIjpbInVzZXIiLCJhZG1pbiJdfQ.4dfDwFr8F0nkI3y91NyKK0_VvnHXe5ZCQZip2EpDvKIOJtGhWMHWYSm0T4hziEbSrHC7yQjlLrhlbMuGcfzeMQ";
		String tok2 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZGFtIiwiZXhwIjoxNjMzODE3MjE1LCJpc3MiOiJ3d3cud3JveC1tLmNvLnphIiwiZ3JvdXBzIjpbInVzZXIiLCJhZG1pbiJdfQ.misapLusAEHCAZunEDSkLUQNVJHIQKn__HtQ_MJIKS4QbD3A3e2Py5yOPy0M-ntRAfE83OGQWdzcb26TDvQ8GQ";
		// System.out.println(new Auth().generateTokenString());
		// System.out.println(new Auth().valid(tok2));
		
		service = new DatabaseService();
		SpringApplication.run(InstituteServerApplication.class, args);


	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("user/login")
	@ResponseBody
	public ResponseEntity<?> login(@RequestBody User user) {
		ObjectNode resp = new ObjectMapper().createObjectNode();
		
		String token = service.login(user);
		System.out.println(user.email);
		if (token != null){
			resp.put("Token", token);
			return new ResponseEntity<>(resp, HttpStatus.OK);
			}
		resp.put("message", "Could not login");
		return new ResponseEntity<>(resp, HttpStatus.UNAUTHORIZED);
		}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("user/register")
	public ResponseEntity<?>  register(@RequestBody User user) throws SQLException {
		System.out.println(user);
		// User user = (User) use;
	HashMap<String, String> resp = new HashMap<>();
	switch (service.register(user)){
		

			case ACCOUNT_EXIST:	
				resp.put("message", "Account already exist..");
				return new ResponseEntity<>(resp, HttpStatus.CONFLICT);
			case INCOMPLETE_FORM:
				resp.put("message", "Missing fields..");
				return new ResponseEntity<>(resp, HttpStatus.UNPROCESSABLE_ENTITY);
			case NOT_ALLOWED:
				resp.put("message", "Not Allowed to create account");
				return new ResponseEntity<>(resp, HttpStatus.FORBIDDEN);
			case SUCCESS:
				resp.put("message", "Account Created, login to start using it..");
				return new ResponseEntity<>(resp, HttpStatus.OK);
			}
			return null;
																																																																																																																																																																																					
	}

	@GetMapping("/user/logout")
	@ResponseBody
	public String logout( @RequestHeader (name="Authorization") String token){
		// token = token.split(" ")[1];
		System.out.println(token);
		if ( service.logout(token)){
			return "Logged out";
		}
		return "Not logged in";
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/user")
	@ResponseBody
	public ResponseEntity<?>  userInfo( @RequestParam (name="Authorization") String token){
		// token = token.split(" ")[1];

		User user = service.getUser(token);
		System.out.println(token);	
		if (user != null){
			return new ResponseEntity<>(user, HttpStatus.OK);
		
		}
		return new ResponseEntity<>(user, HttpStatus.UNAUTHORIZED);
	}

	
}
