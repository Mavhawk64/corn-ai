CREATE PROCEDURE upHistory_Select (
    @History_Id int default null,
    @FireBaseID varchar(128) default null
)

language sql

as $$
if @History_Id >= 0 then
    select * from History where History_Id = @History_Id;
elsif @FireBaseID is not null then
    select * from History where Firebase_User_Id = @FireBaseID;
end if;
$$;