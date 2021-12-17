package com.CurrencyConvertor;

import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.http.HttpServlet;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
//import java.sql.Statement;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class feedback extends HttpServlet{
	
	public void service(HttpServletRequest req, HttpServletResponse res) {
		try {
			String name=req.getParameter("name");
			String email=req.getParameter("email");
			String message=req.getParameter("message");
			
			String query="INSERT INTO feedback VALUES ('"+name+"', '"+email+"', '"+message+"');";
			
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/cuco", "root", "t21022003");
			Statement st= con.createStatement();
//			int count = st.executeUpdate("INSERT INTO feedback VALUES ('"+name+"', '"+email+"', '"+message+"');");
			int count = st.executeUpdate(query);
			PrintWriter out = res.getWriter();
			out.print("Feedback Submitted Successfully !");
			res.sendRedirect("Home.html");
			st.close();
			con.close();
		} catch (Exception e) {
			System.out.println("Error: "+e);
		}
		}
}
