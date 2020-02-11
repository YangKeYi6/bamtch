package com.youkeda.wacai.web.control;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FilePractice {
    public static void main(String[] args) {
        read();
    }
    public static void read(){
        File file = new File("README.md" );
        try {
            FileReader fr = new FileReader(file);
            int temp = fr.read();
            while (temp != -1){
                System.out.print(temp);
                temp = fr.read();
            }
        }  catch (IOException e) {
            e.printStackTrace();
        }
    }
}
