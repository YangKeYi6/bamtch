package date;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DatePractice {
    public static void main(String[] args) {
        Date date1 = new Date();
        System.out.println(date1);
        System.out.println(date1.getTime());
        SimpleDateFormat sdf = new SimpleDateFormat("YYYYMMdd_HH:mm:ss");
        System.out.println(sdf.format(date1));
    }
}
