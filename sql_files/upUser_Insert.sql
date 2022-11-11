create PROCEDURE upUser_Insert (
    @FireBaseID varchar(128),
    @Email varchar(255),
    @DateCreated datetime
)

language sql

as $$
INSERT INTO User (Firebase_User_Id, User_Email, Date_Created) VALUES (@FireBaseID, @Email, @DateCreated);
$$;