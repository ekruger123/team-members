import TeamMemberCard from "./teamMemberCard";

const TeamMembers = ({employees, handleEmployeeCardClick, selectedTeam}) => {
    return (
        employees.map((employee) => (
            <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}/>
        ))
    )
}

export default TeamMembers;