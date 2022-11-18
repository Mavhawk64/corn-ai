create PROCEDURE upUser_Insert (
    @FireBaseID varchar(128),
    @UserEmail varchar(255)
)

language sql

as $$
INSERT INTO User (Firebase_User_Id, User_Email, Date_Created) VALUES (@FireBaseID, @UserEmail, now());
$$;