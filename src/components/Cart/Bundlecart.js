import React, { Component } from 'react'
import Heading from '../reuseable/Heading'
import Img from 'gatsby-image'
import { node } from 'prop-types'

// const getCaty = items => {
//     let holdItems = items.map(items => {
//         return items.node.category
//     })
//     let holdcategories = new Set(holdItems)
//     let categories = Array.from(holdcategories)
//     categories = ["all", ...categories]
//     return categories
// }

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state= {
            bundles: props.bundles.edges,
            mybundles: props.bundles.edges,
          //  mycategories: getCaty(props.bundles.edges)
        }
    }

    // catyClicked = category => {
    //     let keepitsafe = [...this.state.bundles]

    //     if(category === 'all') {
    //         this.setState(() => {
    //             return{
    //                 mybundles : keepitsafe
    //             }
    //         })
    //     } else {
    //         let holdme = keepitsafe.filter(({node}) => node.category === category)
    //         this.setState(() => {
    //             return{
    //                 mybundles : holdme
    //             }
    //         })
    //     }
    // }

    render() {
        //console.log(this.state.courses)
        return (
           <section className="py-5">
               <div className="container">
                    <Heading title="Bundles"/>
                    {/* <div className="row my-3">
                        {/* <div className="col-10 mx-auto text-center">
                            {this.state.mycategories.map((category, index) => {
                                return(
                                    <button 
                                    type="button" 
                                    className="btn btn-info m-3 px-3"
                                    key={index} 
                                    onClick={() => {
                                        this.catyClicked(category)
                                    }}
                                    >
                                        {category}
                                    </button>
                                )
                            })

                            }
                        </div> */}
                    {/* </div>  */}
                    <div className="row">
                        {this.state.mybundles.map(({node}) => {
                            return(
                                <div
                                key={node.id}
                                className="col-11 col-md-6 my-3 d-flex mx-auto"
                                >
                                    <Img fixed={node.image.fixed} />
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex">
                                            <h6 className="mb-0">
                                               {node.title}
                                            </h6> 
                                            <h6 className="mb-0 text-success ml-4">
                                               $ {node.price}
                                            </h6> 
                                        </div>
                                        <button 
                                         data-item-id={node.id}
                                         data-item-price={node.price}
                                         data-item-url="https://learning-website.netlify.app/"
                                         data-item-image={node.image.fixed.src}
                                         data-item-name={node.title}
                                         className="btn btn-warning snipcart-add-item">Join Now
                                        </button>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </div>
               </div>
           </section>
        )
    }
}
