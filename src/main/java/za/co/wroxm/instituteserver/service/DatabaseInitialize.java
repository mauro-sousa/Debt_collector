package za.co.wroxm.instituteserver.service;

import java.io.FileInputStream;
import java.io.IOException;

import javax.annotation.PostConstruct;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;


public class DatabaseInitialize {
    
    public static final String IN_MEMORY_DB_URL = "jdbc:sqlite::memory:";
    public static final String DISK_DB_URL = "jdbc:sqlite:";
    // @PostConstruct
    private String dbUrl = null;

public Connection getConnection() {
    // processCmdLineArgs( args );

    try( final Connection connection = DriverManager.getConnection( DISK_DB_URL+"test.db" ) ){
        System.out.println( "Connected to database " );
        return runTest( connection ) ?  connection : connection;
    }catch( SQLException e ){
        System.err.println( e.getMessage() );
        return null;
    }
    }


    private boolean runTest( Connection connection ) {
        try( final Statement stmt = connection.createStatement() ){
            stmt.executeUpdate( "CREATE TABLE test3( name, last_name)" );
            System.out.println( "Success creating test table!" );
            return true;
        }catch( SQLException e ){
            System.out.println("Could not create tabe");
            return false;
        }
    }



}
