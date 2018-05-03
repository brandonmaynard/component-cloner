# Component Cloner

This component's use is meant for when you have a very complex component that has 
children/grandchildren/etc nodes, or just a lot of properties and want to retain a lot of 
those properties without having to re-create, but rather, clone an existing structure.

To use, do the following:

- Download and install this project in your AEM instance
- On a page to be authored, ensure that this component is enabled within the design
    - It is found in the 'General' component group
- Drop the component cloner on a parsys
- Navigate to the component/node you wish to clone
- Click save on the dialog and that entire component/node structure will be cloned to where ever 
the original 'Component Cloner' was placed on a parsys and removing itself when complete

This is very useful if your organizations's implementation of AEM is atomic and your components consist of 
3, 4, or even 10+ micro-components/atom-components. Rather than the author having to configure those 3, 4, 
or 10+ micro-components/atom-components, they can clone a pre-existing cluster and retain the full 
structure and property values, saving valuable time dragging/dropping and configuring 3, 4 or 10+ 
micro-components/atom-components.

** Tested and working on AEM 6.2, 6.3 and 6.4
