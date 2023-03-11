import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'

export const Project = (project) => {
    const reverseStyle = project.project.rowReverse ? 'Reverse' : ''

    return (
        <div className={`projectCard${reverseStyle} card`}>
            <div className={`projectDescription${reverseStyle}`}>
                <p className='projectTitle'>{project.project.projectName}</p>
                <div className={`projectSummary projectSummary${reverseStyle}`}>{project.project.projectSummary}</div>
                <div className='projectLanguages'>
                    {project.project.languages.map((language) => (<p key={`${project.project.projectName}-${language}`} className={`projectLanguage${reverseStyle}`}>{language}</p>))}
                </div>
                <div>
                    <p className='projectSite'><a href={project.project.siteLink} target='_blank' rel="noreferrer" className='projectSiteLink'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/></a></p>
                    {project.project.githubLink && <p className='projectCode'><a href={project.project.githubLink} target='_blank' rel="noreferrer" className='projectCodeLink'><FontAwesomeIcon icon={faCode} size='lg' /></a></p>}
                </div>
            </div>
            <div className='projectImageContainer'>
                <div className='projectImageWrapper'>
                    <img src={project.project.img} className='projectImage' />
                </div>
            </div>
        </div>
    )
}
