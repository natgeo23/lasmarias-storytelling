var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibGFzbWFyaWFzIiwiYSI6ImNsajY2bHNhYjBkd20zZms1a3Y2cjRscmoifQ.ta3GpH-J_Un_k1AX3dRggw',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Visite Las Marías',
    subtitle: '',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'las-marias-01',
            alignment: 'center',
            title: 'YERBA MATE TARAGUI',
            image: 'https://www.lasmarias.com.ar/assets/images/home/bg-home.jpg',
            description: 'Las Marias, where yerba mate Taragui is born. With almost ten thousand acres cultivated inside the heart of the rainforest, form more than 100 years; has become the only company in the world to produce mate in large scale and in an integrated fashion. Thus managing to become an expert in each stage of the process, from the moment the product is born until it has been packed. A place where its timings, care and processing are respected as it is nowhere else.',
            location: {
                center: [-68.1119006, -32.0515047],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-02',
            alignment: 'left',
            title: 'In the heart of the South American Rain Forest',
            image: 'https://doc-14-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/0e72k8frpma2fivqbhu5924c6g/1688154224250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-HZ6Iw0JlsqTi8fGuk-5acS3yrqBzAgESnpY27boE1j1gphBoiMtKhBWVmDe3Pf2vLf5RTpyX4FGRMNgRCskGySk6_EuMGi2dZ8wWfOXwgU6gg5owp6FNDNMIadOyhiYsebsmYVCXPKca0ihpRxqJ1EeQ_iWJ7ehC2cP7Hdir5Ht2PYRIELGFYy4rSG73LhMK5g?session=0&fife=s480',
            description: 'Establishment Las Marias is located in the heart of the South American rainforest, and on one of the largest underground water reserves in the world: the Guarani aquifer. Where yerba mate Taragui is born, grown and packaged for the entire planet',
            location: {
                center: [-56.0329514940298, -28.1506234990116],
                zoom: 12,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'las-marias-03',
            alignment: 'center',
            title: 'Las Marias & Yerba Mate Taragui',
            image: 'https://doc-0c-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/hss69bp49tc390nkgi01bos3sg/1688154672750/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-HuNoknKS7JZ4pMuIqF0TxMLzcKGeSHhKKRSf-y8hMZ-uYjk41gTsRQ9YXbAL8sQCc0LIu-gC4GuXeffRo7L5zkWQd_I62BRtV9pBGyEguktukLY43UqdEFSv3ZZHHNJavJMSIvsAW_BCAL5zj0tMJ-RSeLownri5RWggUgUFZlHy4VKu0Q0pCFBC_s6g6ZL002?session=0&fife=s480',
            description: 'Las Marias, where yerba mate Taragui is born. With almost ten thousand acres cultivated inside the heart of the rainforest, form more than 100 years; has become the only company in the world to produce mate in large scale and in an integrated fashion. Thus managing to become an expert in each stage of the process, from the moment the product is born until it has been packed. A place where its timings, care and processing are respected as it is nowhere else.',
            location: {
                center: [-56.051393, -28.112367973832],
                zoom: 14,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-04',
            alignment: 'right',
            title: 'Las Marias - A Unique Example',
            image: 'https://doc-0k-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/3ui6ai2fkil8fmrp5dh2i9kquo/1688154224250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-GpOcW0nw-zaY7Tz83owl6KhadNLtJrol3YhgpUV7IBDwLQVSYUm5f9oJgzvfq1sxGp6CaPqJ_18-RV4bDt0KGbjH26LNb9TiJsbSupZq19rVttiB7Muiu48fuJRaoTrKY6okaSYiHijXaQYSC12yWcbe1GelMna51h1ql6_OWSYAkE2AueFtJzUxmBZhif3qs?session=0&fife=s480',
            description: 'The Navajas family, which owns Las Marias, started the mate operation in 1924 on their cattle estancia with 38 hectares of planted mate.  This was revolutionary then, and still is today, because prior to that, the raw material was and, largely still is, produced by small holders and subsequently bought by processors and packers. Most small producers cannot be relied on to deliver a consistent raw material. Production at Las Marias expanded over the years to the present with more than 6,000 hectares of mate, which complements the 1,000 hectares of tea. ',
            location: {
                center: [-56.0546792687241, -28.1109957617807],
                zoom: 15,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'las-marias-05',
            alignment: 'center',
            title: 'The Yerba Mate',
            image: 'https://doc-04-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/5uejnervlfljakpep538sjn604/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-FTz3kaQfc3N04oQL6E8bE5GdF8CrRYVYZfolLaT0Hw1VfPwvBkwWiNyf052jleLbIVGdC_ZDrdDhKjYcRawZ1pKdktWbGw7AVdTRFLRiUGOaNHUGRyK3Vszd8wt-UPJQgeRaSvzUjMxjtSnR2jJBH_CCIkQFfBFXZx8sA8S1TjqbH0drCRMEUIrCqkWX3Calc?session=0&fife=s480',
            description: 'Yerba mate has stubbornly refused to grow beyond the perimeters once inhabited by the Guaraní. Yerba mate comes from South America and continues to be a very American plant, but it doesn’t grow in just any part of the continent. Growing areas continue to be restricted to the northeast of Corrientes, to Misiones and to Paraguay and southern Brazil. There, factors of temperature, humidity and soil composition converge, creating optimal conditions for yerba mate cultivation. All attempts to grow the plant in similar areas in North America, Asia and Africa have failed, and so yerba mate cultivation remains an exclusive and invaluable treasure for its native regions. Cultivated, yerba mate, like fruit trees, are limited to 5 mts. in height. It is harvested between April & October, leaves and branches are processes in a natural way. Respecting the Guarani method improved by the Jesuits.',
            location: {
                center: [-56.047868552803, -28.0883466689247],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-06',
            alignment: 'left',
            title: 'The Nursery',
            image: 'https://doc-0o-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/cn77uq3bo1du3kb1812jut9m8o/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-HFE1ucjqL1QDVo0rnOtXhdS8j6srBzsPAyI0208cgSquPglJJm1rjxTZJNipIlyaTZbmoxmFrR19J1Kc8uSEErH-A8XU1qc45yamj3Sd-R1RJwq1zfSvu3AgmDl-dwtVOtuIyb7vlgl9_60EnI_rfv0MtW3w-gts8LuNRyxsxbPe_qj6D9u4ry0ky4PMF-Tn_T?session=0&fife=s480',
            description: 'Everything  begins in the Nursery, where millions of young plants are sprouted. They are selected from the best specimens in the plantations to ensure superior quality from the very start.',
            location: {
                center: [-56.0582478123943, -28.1136108271843],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'las-marias-07',
            alignment: 'center',
            title: 'Plantation',
            image: 'https://doc-0k-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/6kf9h4fdc48trdk1o26auean1k/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-EdLNWEb_4xMh9JPq7hEDP7pnoz34_6R9qGQ1MWDFsGVTLUNaz-yM_c9RIpyUcqKIdcnCtaeFxSOXRJYll7D1E5TguwlU671hxuF765YNigu_VJW8x8wDLa1S9_nxdzD3fAVDi_eswk4xvBvhvfMDp8s922LiCYIqD0NDD9lkSkFtN5itFZzUTTpffCm97C4Od3?session=0&fife=s480',
            description: 'After six months, the young plants are transplanted in the fields. The tender, loving care each one receives causes them to grow with health, vigor and with all the best qualities.',
            location: {
                center: [-56.0398286620423, -28.1434613091077],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-08',
            alignment: 'right',
            title: 'The Harvest',
            image: 'https://doc-0s-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/fc8u62bpnvu8hegl2hmg81muu4/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-GNIHNCDlxbrMARW11NsJg_iSiz0d4fL8NbcBJLtqrPW1-C83fND-JkZB8JjlR7rJrbC5oXqlqN6J056YLcKJVXde0iZh5D_HNRFnvRqAdz-R-wV3-bDkaXgdlgXuBS8rM8Eo5D9I083lkjKWJ-eSJTwugDQgy1ppfDJzUKcNHugG-o93LhoJ4liztdsV_PLgH-?session=0&fife=s480',
            description: 'Tradition and technology converge in the yerba mate harvest. Leaves are picked only when they are mature, at exactly the right moment, to ensure the highest quality.',
            location: {
                center: [-56.0329514940298, -28.1506234990116],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'las-marias-09',
            alignment: 'center',
            title: 'Yerba Mate Taragui - South America´s leading brand',
            image: 'https://doc-10-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/2o8qnc8mbnqelbcg8e4nsb63ug/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-Ggn3vM3xhIhBH8GN-iD6XPHVcXFbG_IRRnqFz7pmZvpihZBBr8weerxzroGSDGWeHGJSA2yrnYmCkIJkZw9_QYkN-jh-w2Vx_62N_MP0UY68fBlpmVxjXzep9nXyZbNZVmTbFTKHKcTBlQ7gliHQLpr_Y341CBwy2UAKhEkCYRS1gngfQQSdpZwvqcfgKa65RU?session=0&fife=s480',
            description: 'With almost ten thousand acres cultivated inside the heard of the rainforest, form more than 100 years; has become the only company in the world to produce yerba mate in large scale and in an integrated fashion, processing more than 60,000 tons of yerba mate annually.',
            location: {
                center: [-56.0477173999818, -28.1155508232126],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-10',
            alignment: 'left',
            title: 'The Dryer',
            image: 'https://doc-10-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/hn0uqm03jtvrue1l2043mdgi9o/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-EDWe1avFgi2HJckJl_oJiLba4kWiP08ATlkwDRA6xZ86QNMaswklqpN-faS5GVUUgv8OzSDtCohKZE69t9q45kGTnW0T_rxM3J0S7deBzx_MFQ6iBiPSUCQnlQUuo3co2jPiNSInkzLtaX3-Phvf6NBunht0L7Tn8EawITPkUHALTKonycmA9qGV5gPq3WEahS?session=0&fife=s480',
            description: 'Leaves are directly exposed to heat from fire. This slows processes of fermentation and oxidation. Then for three hours, they are exposed to a indirect heat a temperature of 100° Centigrade (212° Fahrenheit). Once dried, they are crushed. The result is called toasted yerba mate. We have the most modern drying system in the industry. This new process, which carries out drying through indirect fire and batch traceability, allows us to be the first yerba mate from Argentina to systematically eliminate the presence of Anthraquinone and reduce the levels of polycyclic aromatic hydrocarbons (PAHs) such as Benzopyrene , meets all the requirements established by the European economic community in CEE, Pesticides - EU MRLs, 0632030: Mate / maté.',
            location: {
                center: [-56.0508946931497, -28.1057271120964],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'las-marias-11',
            alignment: 'center',
            title: 'The Aging',
            image: 'https://doc-08-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/9ro11on5a42070u38mclihdif8/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-EUt6Wwb34b-aCOdNCAuyToEal7qWTs8LhACikHrU8Zh_YXW-tncl1Tp8GakBXhKcBDpanehkO92pUyghRXwqqEPKWn9p--Njv86ZlcmIhsn51MEXy1bzoEYTE4PW0RIFDQ7PNTRThlBQM_0iQQ0BdOEvbcWVFdET3HCVhoqGq0sEm0e3SlelSUubRRnbaShkXM?session=0&fife=s480',
            description: 'The flavor, color and aroma distinctive to each variety  of yerba produced at Las Marías are obtained through an aging process that is strictly controlled by our experts.',
            location: {
                center: [-56.0530841438187, -28.1067636666032],
                zoom: 17,
                pitch: 39.50,
                bearing: 46.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-12',
            alignment: 'right',
            title: 'The Mill',
            image: 'https://doc-0o-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/k5eucair4norq7fjms6u7meens/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-FB8EAF4coklxEWQZqkJwf6co-rzw5J8wn8oVpgzvw3zwvVbY66lUm7F6i4X-hbOd0QLg_DIMOmYbO8X0Jo3wrKhnBQlbmt-z3BNxSjtcP5zcUcEFT-HbDfTmtzvyZ79MI17ge8oy0geiY6Zvke4z_nktjUMu3dn46hrTMT4xxB9RoVtmXYwgOy2yav5klip76r?session=0&fife=s480',
            description: 'Processing is completed at the mill, where the yerba mate is treated according to its type, the way it was harvested and the time of year it was processed. Plant parts are then mixed in varying proportions, depending on the nature and brand of yerba mate being produced.',
            location: {
                center: [-56.0551552161144, -28.110774625336],
                zoom: 16,
                pitch: 39.50,
                bearing: 26.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'las-marias-13',
            alignment: 'center',
            title: 'Packaging',
            image: 'https://doc-14-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/ho9top11fuo8nbd7d8jucr6oh0/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-FNVDF-FlvK_0yw6djmNdekxDiSia9RNg1RqL2QoNbtrW8um5R-d9gHKMsNDJXyWubdLcS7AGw0tZe04fZmn5yJHoo0DWu01l8GWW7MmxTsMAGQQyRC7vLyeB8Dse5Ym53CRwjnE-GNiPa7CeC6ZORZwkuMYYIsVoSuI9cTtHn3kKKFpw3CFLMkyxgM7RPCCE9Z?session=0&fife=s480',
            description: 'This last link in the processing chain is important for preserving all the qualities of fine yerba mate.',
            location: {
                center: [-56.0557498545774, -28.110264298029],
                zoom: 17,
                pitch: 39.50,
                bearing: 46.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-14',
            alignment: 'left',
            title: 'The Tasting',
            image: 'https://doc-08-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/86rdgkpjcfu052r213eb026dko/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-GLb05lH45gf-GIYIrXbNMO64ZkThOFPXqTsbuieGHBT1GGDpe0bGNSI2oaAe-51eBI1CNs_G4AHHRmNgrO0YcONSYEHXDO3BQqXf7j62JTTqCqW1k9tMdtvULt_--MeF3kztTvuOHLz1dk8DXLZyCav2Yglk6saASLwslL7_YhgRdE4HEI9q-yU9d0-yVmxhkQ?session=0&fife=s480',
            description: 'The discerning palates of our taste-testers are the final control of each step in the process. They ensure perfect balance and long-lasting flavor from each and every variety of yerba mate that we produce. The brands of Las Marias are consistent because they are blends. Mate harvested at different times and from different areas have different characteristics.  For instance, north Missiones Province has a heavier taste than Corrientes Province, and mate harvested in summer is higher in caffeine then that of spring and fall.',
            location: {
                center: [-56.0554488474383, -28.1105727845809],
                zoom: 16,
                pitch: 39.50,
                bearing: 26.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-15',
            alignment: 'center',
            title: 'Taragui, Argentina´s most exported brand',
            image: 'https://doc-14-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/uik0a95hp8nffqurn9974mjkrg/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-GzjMhViGkT60y_dbt9MxtZhx57riykFiuIu6AFU4wBzgnAQ43v3Ocp6pmDKuECP7nME3e6yH1VMAZYAn43UnhHfVsj937rUpYi96wafGiH8J2UyBOW3J9hSzQs6N_homStKsIfeupkBgKTmba_3RzPY-ClDq_N9zatdyGe2wZHHunH_hGum7KGwnDOXGrOyPY?session=0&fife=s480',
            description: 'The Argentine herbal industry is not alone in the world. It is currently competing with Brazil to impose its product on the European and North American markets. Las Marías is today the main Argentine ambassador in these markets, based on his decision not to follow the path chosen by most companies to export yerba mate as a commodity. On the other hand, we have the vocation to give added value to the product, where the price goes to the background, and the ability to develop business intelligence and link architecture in the destination markets becomes relevant. We currently export to more than 40 destinations and are present in more than 7,000 points of sale outside of Argentina.',
            location: {
                center: [-56.0569993925116, -28.1100963336456],
                zoom: 17,
                pitch: 39.50,
                bearing: 46.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-16',
            alignment: 'right',
            title: 'Sustainability and Performance - Compost Factory',
            image: 'https://doc-0o-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/8rdeg0m6nfhf8vcl0csfcro8d4/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-FBb1xYuLOhhnbY-5L5kCTi1kIGb6gvRPsJQPDnEmgn8Oigkg0aOqDC-3AWIabvOZhOBn3WklOwWau7ey6S3fzYuQGVI7GGKEAuTD-1OISzLr3L3k7GlT-UTwpZTdRw1A2obmdR9J_GYNXahuqoJrhhVgfp53rZ4KLoD5PyeMojtXA3PNvb3xq2-0oPo06RXGg?session=0&fife=s356',
            description: 'With an area that today occupies 10 hectares, the house of the renowned brands Taragüi, Unión, La Merced and Mañanita generates 12 thousand tons of compost per year that it uses to fertilize its yerba mate and tea plantations. The use of this natural amendment, which began with a pilot test in 2009, allowed Las Marías to increase its productivity by 16% over the treated plantations.',
            location: {
                center: [-56.0346892679247, -28.0855612981998],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-17',
            alignment: 'center',
            title: 'The Social Aspect',
            image: 'https://doc-0s-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/6cd3bltjn7cqn0b6m3snen5fn0/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-F9GBUjPzImshCH1H4rE1stMu04PXQ5YfiHaJyj50KY0_V1KUPZN5zKEW1hC8NGAb4QosiN_escARbpFo_sv4gou00T2yh-WVCe92A95zoyAyH-86gBu2oeCFo6ndzvoInTwhYdbtPdqgKCg9EvwfLp5M2G3uph32WiSysfmeYAxaTv4rgd9_7jfKdnOiRmbUQ?session=0&fife=s480',
            description: 'When the mate operation started, labor needs increased dramatically and continued to grow.  The Navajas family founded a clinic and a school for the workers, as well as providing housing.  The clinic has evolved from a simple first aid center into a full service medical center. The school, which started with a single teacher, has morphed into the ‘Victoria Jean Navajas Foundation’.  This has three components, which are a primary school with 500 students, the ‘Victor Navajas Centeno Agricultural and Technical Institute’, and a Labor Education and Training Center (LETC). This is vocational training center which is free and available to anyone, not just people associated with Las Marias. The skills learned can be applied to the business, but graduates are not obligated to work for the company.  As Pablo Navajas, part of the third generation, said, “We need to get the gaucho off his horse and into the twenty first century”.',
            location: {
                center: [-56.0274690659686, -28.088466864486],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-18',
            alignment: 'left',
            title: 'In Harmony with the Environment',
            image: 'https://doc-08-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/nd6is8a0nc9nca0s2h9i8ea8cs/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-GZr7JJA9upARAmi7ArjBB27Ey5fSFcV4HqGU_Wjp74MI5eQujjXT2V_RUwhoiuPCMum97213987iTanYUMjR3FFcOcmsWApEQrfnq3MAUiJnlK94FoGENP-GYB2CF4mMJoZXB1z1FaBHNRfGOQpSL0uNwa6SfoodkA6lyal27FDpJAaoJGQCtfpVXJM375M1Y?session=0&fife=s480',
            description: 'Living in harmony with the environment is not only healthy; it is a sound approach to production. Every day, caring for the environment is a key component of work at Las Marías. In order to maintain the fertility of the soil and protect it from erosion caused by the region’s abundant and often torrential rains, we use minimal tillage when growing tea, yerba mate and forestry species. To protect our plantations from pests, we prefer to use bio-products that are safe for the environment and harmless to humans. We take advantage of the actions of helpful insects, and rather than insecticides, we use specially developed, natural products. This is all part of our Integrated Pest Management system. The forests near our plantations are maintained and replanted with diverse native species of trees, including cedar, urunday, golden trumpet, golden shower, peteriby, guayubira, viraró, white tip, anchico and others. Our nature reserves conserve the habitats of a great variety of animal and plant species, especially endangered ones. Among the measures we take is the replanting of trees of high ecological value. Our ongoing concern for the preservation of the environment has led to the design of an ecological corridor that links woodlands and native countryside. This allows animals (deer, foxes, monkeys and capybaras, among others) to roam freely and local plants (golden trumpet trees, palms, fruit trees and many more) to flourish.',
            location: {
                center: [-56.0565170045674, -28.1157780169592],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'las-marias-19',
            alignment: 'center',
            title: 'The Secret of a Step-by-Step Process',
            image: 'https://doc-08-74-mymaps.googleusercontent.com/untrusted/hostedimage/hfshpmip4qsukgco5532hvlseg/8p56u749s2dfnljfvf4u7unvi0/1688390733250/eu-te3trVxGmAPYwTWw4InVXfrQMAhNS/07911908548188917015/5ACtvi-ENtfzwbV2k8JvWPVtnRWPs_PGbVNekzqBAKpeXFcfpWP0CbiSW9tXPDw_7eYf21Zd4lkJm5mTYbcjf6cJYjxRdecMVqYJ3q7MKYjUuowSEItvprvXksP7UypwqXDfaNna607bZmYP7Zw6Xqhzie55WDazWVvLK17W9DV1tknyZTtSL2hWbYWSRHz2MldDMQew?session=0&fife=s480',
            description: 'Las Marías is outstanding for its integrated production of yerba mate and black tea. All plants are grown on our own lands, and only the best of the best are selected, then carefully harvested. Products are then processed step by step and packaged. Nothing is left to chance; all processes are controlled by a team of trained experts and the highest quality standards are maintained for all products.',
            location: {
                center: [-56.0462097957714, -28.1872725352807],
                zoom: 16,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        }
    ]
};