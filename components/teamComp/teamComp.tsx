"use client";

import "./teamComp.css";

interface TeamCompProps {

}

const TeamComp: React.FC<TeamCompProps> = ({  }) => {

    const the_Team = [
        {fullName: "İ. Kaan Zıpkın", workingUnit: "web geliştiricisi", profilePhoto: "Photo-0" },
        {fullName: "Ece Yurtseven", workingUnit: "web geliştiricisi", profilePhoto: "Photo-1" },
        {fullName: "Bartu Kaptanoğlu", workingUnit: "sosyal medya Sorumlusu", profilePhoto: "Photo-2" },
        {fullName: "Mirza Koçak", workingUnit: "app geliştiricisi", profilePhoto: "Photo-3" },
        {fullName: "Beril Tokatlıoğlu", workingUnit: "sosyal medya Sorumlusu", profilePhoto: "Photo-4" },
        {fullName: "Mustafa Güzel", workingUnit: "app geliştiricisi", profilePhoto: "Photo-5" },
    ]

    return (
        <div className="teamCompContainer" >
            {the_Team.map((member) => (
        <div className="teamCompWrapper" key={member.fullName} >
            <ul className="teamComp" style={{padding: "0%", display: "flex", flexDirection: "row"}} >
                <div className="teamCompPhoto" > {member.profilePhoto} </div>
                <ul style={{padding: "0%", display: "flex", flexDirection: "column"}} >
                    <div className="teamCompName" > {member.fullName} </div>
                    <div className="teamCompUnit" > {member.workingUnit} </div>
                </ul>
            </ul>
        </div>
    ))}
        </div>
    );
};

export default TeamComp;
