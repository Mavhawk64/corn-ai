create procedure upHistory_Delete (
    @History_Id int default null,
    @FireBaseID varchar(128) default null
)

language sql

as $$
if @History_Id >= 0 then
    delete from History where History_Id = @History_Id;
elsif @FireBaseID is not null then
    delete from History where Firebase_User_Id = @FireBaseID;
end if;
$$;