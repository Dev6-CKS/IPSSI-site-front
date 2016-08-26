import React, { Components } from 'react'

export default class Presentation extends Component {
  constructor(props){
    super(props)
    this.state = {
      presentationItems: [
        {
          title: 'See it in action',
          subTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing nostrud.',
          description: 'Adiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
          picture: 'assets/images/home/3036728-poster-p-1-business-live-action-role-players-blarp-is-a-thing.jpg' 
        },
        {
          title: 'Sed ut perspiciatis unde omnis',
          subTitle: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis',
          description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Gos qui ratione voluptatem sequi nesciunt. ',
          picture: 'assets/images/home/3036728-poster-p-1-business-live-action-role-players-blarp-is-a-thing.jpg' 
        },
        {
          title: 'At vero eos et accusamus et iusto',
          subTitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
          description: ' Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.  Nam libero tempore, cum soluta nobis.',
          picture: 'assets/images/home/3036728-poster-p-1-business-live-action-role-players-blarp-is-a-thing.jpg' 
        }
      ]
    }
  }

  render() {
    const { presentationItems } = this.props
    return (
      <ul className="Presentation">
        { presentationItems.map(item => (
            <li></li>
          )) 
        }
      </ul>
    )
  }
}
