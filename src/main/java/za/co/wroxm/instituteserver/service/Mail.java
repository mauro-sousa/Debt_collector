package za.co.wroxm.instituteserver.service;
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.Label;
import com.google.api.services.gmail.model.ListLabelsResponse;
import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Authenticator;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.MessagingException;
import java.util.Properties;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Content;
public class Mail {


    public static void main(String[] args) {

        // Recipient's email ID needs to be mentioned.
        String to = "xndlangi@student.wethinkcode.co.za";
        String key = "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";
        String pas = "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";
        // Sender's email ID needs to be mentioned
        String from = "toaddress@gmail.com";

        // Assuming you are sending email from through gmails smtp
        String host = "smtp.sendgrid.net";

        // Get system properties
        Properties properties = System.getProperties();

        // Setup mail server
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");

        // Get the Session object.// and pass username and password
        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication() {
                
                return new PasswordAuthentication(key,key);

            }

        });

        // Used to debug SMTP issues
        session.setDebug(true);

        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header.
            // message.setFrom(new InternetAddress("dalngisax@gmail.com"));

            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject("This is the Subject Line!");

            // Now set the actual message
            message.setText("This is actual message");

            System.out.println("sending...");
            // Send message
            Transport.send(message);
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }

    }

}
//     public static void main(String[] args) throws IOException {
//         Email from = new Email("test@example.com");
//         String subject = "Sending with SendGrid is Fun";
//         Email to = new Email("test@example.com");
//         Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
//         Mail mail = new Mail(from, subject, to, content);
    
//         SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
//         Request request = new Request();
//         try {
//           request.setMethod(Method.POST);
//           request.setEndpoint("mail/send");
//           request.setBody(mail.build());
//           Response response = sg.api(request);
//           System.out.println(response.getStatusCode());
//           System.out.println(response.getBody());
//           System.out.println(response.getHeaders());
//         } catch (IOException ex) {
//           throw ex;
//         }
//       }
    // private static final String APPLICATION_NAME = "Gmail API Java Quickstart";
    // private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    // private static final String TOKENS_DIRECTORY_PATH = "tokens";

    // /**
    //  * Global instance of the scopes required by this quickstart.
    //  * If modifying these scopes, delete your previously saved tokens/ folder.
    //  */
    // private static final List<String> SCOPES = Collections.singletonList(GmailScopes.GMAIL_SEND);
    // private static final String CREDENTIALS_FILE_PATH = "/creds.json";

    // /**
    //  * Creates an authorized Credential object.
    //  * @param HTTP_TRANSPORT The network HTTP Transport.
    //  * @return An authorized Credential object.
    //  * @throws IOException If the credentials.json file cannot be found.
    //  */
    // private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {
    //     // Load client secrets.
    //     InputStream in = Mail.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
    //     if (in == null) {
    //         throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
    //     }
    //     GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

    //     // Build flow and trigger user authorization request.
    //     GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
    //             HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
    //             .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
    //             .setAccessType("offline")
    //             .build();
    //     LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
    //     String id = "962440330152-ft3fkcrr039faf0138rp00u1ov29c418.apps.googleusercontent.com";
    //     return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    // }

    // public static void main(String... args) throws IOException, GeneralSecurityException {
    //     // Build a new authorized API client service.
    //     final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    //     Gmail service = new Gmail.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
    //             .setApplicationName(APPLICATION_NAME)
    //             .build();

    //     // Print the labels in the user's account.
    //     String user = "me";
    //     ListLabelsResponse listResponse = service.users().labels().list(user).execute();
    //     List<Label> labels = listResponse.getLabels();
    //     if (labels.isEmpty()) {
    //         System.out.println("No labels found.");
    //     } else {
    //         System.out.println("Labels:");
    //         for (Label label : labels) {
    //             System.out.printf("- %s\n", label.getName());
    //         }
    //     }
    // }
