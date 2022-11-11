CREATE TABLE History (
    History_Id serial PRIMARY KEY,
    Firebase_User_Id VARCHAR(128) NOT NULL,
    Image_URl VARCHAR(MAX) NOT NULL,
    Is_Sick_Choice BOOLEAN,
    Is_Sick_Actual BOOLEAN,
    Is_Sick_AI BOOLEAN,
    Date_Completed DATETIME NOT NULL
)