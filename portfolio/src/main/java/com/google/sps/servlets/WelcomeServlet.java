package com.google.sps.servlets;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /welcome URL. Try running a server and navigating to /welcome! */
@WebServlet("/welcome")
public class WelcomeServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> messages = new ArrayList<String>();
    messages.add("message 1");
    messages.add("message 2");
    messages.add("message 3");

    String json = convertToJsonUsingGson(messages);

    response.setContentType("text/html;");
    //response.getWriter().println("<h1>Hello everyone!</h1>");
    response.getWriter().println(json);
  }

  /**
   * Converts an ArrayList into a JSON string using the Gson library. 
  */
  private String convertToJsonUsingGson(ArrayList<String> message) {
    Gson gson = new Gson();
    String json = gson.toJson(message);
    return json;
  }
}
