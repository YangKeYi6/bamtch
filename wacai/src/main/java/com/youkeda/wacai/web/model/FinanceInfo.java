package com.youkeda.wacai.web.model;

import java.util.Date;

public class FinanceInfo {
    /**
     * 开始时间
     */
    private Date startTime;



    /**
     * 理财金额
     */
    private double amount;

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getIncome() {
        return income;
    }

    public void setIncome(double income) {
        this.income = income;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    /**
     * 预期理财收益
     */
    private double income;
    /**
     * 理财天数
     */
    private int days;
}
