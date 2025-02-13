const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const notificationhistory = sequelize.define('notificationhistory', {
        notificationhistoryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        notificationID: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isIn: [[0, 1]]
            },
            comment: "'0 DISABLED', '1 ENABLED'",
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isIn: [[1, 2, 3, 4, 5, 6, 7]]
            },
            comment: "'1 NEW BOOKIN NOTIFICATION', '2 CUSTOMER APPOINMENT STATUS CHANGE', '3 VERIFY CUSTOMER EMAIL', '4 APPIONMENT REMINDER', '5 CUSTOMER LAST APPIONMENT NOTIFICATION', '6 CUSTOMER BIRTHDAY GRETING', '7 STAFF FULL DAY AGENDA'",
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 2,
            validate: {
                isIn: [[1, 2, 3, 4, 5, 6, 7]]
            },
            comment: "'1 ANY', '2 PENDING', '3 APPROVED', '4 CANCELLED', '5 REJECTED'",
        },
        service: {
            type: DataTypes.STRING,  // Keep as STRING
            allowNull: true,
        },
        recipients: {
            type: DataTypes.STRING,  // Keep as STRING
            defaultValue: '1',  // Default to '1' (as a string)
            comment: "'1 CLIENT', '2 STAFF', '3 ADMINISTRATOR', '4 CUSTOM'",
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        BackupCreatedBy: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        BackupCreatedOn: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
    }, {
        timestamps: false,
        tableName: "notificationhistory",
    });
    return notificationhistory;
};  
