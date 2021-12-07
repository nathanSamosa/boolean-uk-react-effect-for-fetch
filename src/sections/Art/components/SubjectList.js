function SubjectList({subjectTitles}) {

    const renderSubjectList = () => {
        return (
            <>
                <h4>Artistic Subjects:</h4>
                <ul>
                    {subjectTitles.map(subject =>
                        <li key={subjectTitles.indexOf(subject)}>
                            {subject}
                        </li>
                    )}
                </ul>
            </>
        )
        
    }

    return subjectTitles.length > 0 ? renderSubjectList() : null;
}

export default SubjectList