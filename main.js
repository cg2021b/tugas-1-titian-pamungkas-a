function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
    var left_ = [
        -0.8, -0.6,  1, 1, 0.7, 
        -0.2, -0.6,  1, 1, 0.7, 
        -0.8, -0.2,  1, 1, 0.7, 

        -0.2, -0.2,  1, 1, 0.7, 
        -0.2, -0.6,  1, 1, 0.7, 
        -0.8, -0.2,  1, 1, 0.7, 

        -0.8, -0.2,  0.2, 0.2, 0.2,
        -0.75, 0, 0.2, 0.2, 0.2,
        -0.2, -0.2, 0.2, 0.2, 0.2,

        -0.25, 0, 0.2, 0.2, 0.2,
        -0.75, 0, 0.2, 0.2, 0.2,
        -0.2, -0.2, 0.2, 0.2, 0.2,

        -0.7, 0.2, 0.5, 0.5, 0.5, 
        -0.75, 0, 0.5, 0.5, 0.5, 
        -0.65, 0, 0.5, 0.5, 0.5, 

        -0.7, 0.2, 0.5, 0.5, 0.5, 
        -0.6, 0.2, 0.5, 0.5, 0.5, 
        -0.65, 0, 0.5, 0.5, 0.5, 

        -0.6, 0.2, 0.5, 0.5, 0.5, 
        -0.65, 0, 0.5, 0.5, 0.5, 
        -0.55, 0.09, 0.5, 0.5, 0.5, 

        -0.6, 0.2, 0.9, 0.9, 0.9, 
        -0.3, 0.2, 0.9, 0.9, 0.9, 
        -0.55, 0.09, 0.9, 0.9, 0.9, 

        -0.25, 0.0, 0.9, 0.9, 0.9, 
        -0.65, 0, 0.9, 0.9, 0.9, 
        -0.55, 0.09, 0.9, 0.9, 0.9, 

        -0.25, 0.0, 0.9, 0.9, 0.9, 
        -0.3, 0.2, 0.9, 0.9, 0.9,  
        -0.55, 0.09, 0.9, 0.9, 0.9, 

        -0.6, 0.6, 0.0, 0.0, 1, 
        -0.7, 0.2, 0.0, 0.0, 1,
        -0.4, 0.6, 0.0, 0.0, 1,

        -0.3, 0.2, 0.0, 0.0, 1,  
        -0.7, 0.2, 0.0, 0.0, 1,
        -0.4, 0.6, 0.0, 0.0, 1,

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.7, -0.1, 0.5, 0.5, 0.5,
        -0.671, -0.034, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.7, -0.1, 0.5, 0.5, 0.5,
        -0.68, -0.166, 0.5, 0.5, 0.5,

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.5, -0.1, 0.5, 0.5, 0.5,
        -0.533, -0.027, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.5, -0.1, 0.5, 0.5, 0.5,
        -0.524, -0.163, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.013, 0.5, 0.5, 0.5,
        -0.671, -0.034, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.013, 0.5, 0.5, 0.5,
        -0.533, -0.027, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.18, 0.5, 0.5, 0.5,
        -0.68, -0.166, 0.5, 0.5, 0.5, 

        -0.6, -0.1, 0.5, 0.5, 0.5,
        -0.6, -0.18, 0.5, 0.5, 0.5,
        -0.524, -0.166, 0.5, 0.5, 0.5, 

        -0.844, -0.644, 0.33, 0.33, 0.33,
        -0.8, -0.6, 0.5, 0.5, 0.5,
        -0.8, -0.5, 0.7, 0.7, 0.7,

        -0.844, -0.644, 0.33, 0.33, 0.33,
        -0.8, -0.6, 0.5, 0.5, 0.5,
        -0.2, -0.6, 0.33, 0.33, 0.33,

        -0.713, 0.045, 0.9, 0.9, 0.9,
        -0.685, 0.136, 0.9, 0.9, 0.9,
        -0.669, 0.046, 0.9, 0.9, 0.9,

        -0.644, 0.133, 0.9, 0.9, 0.9,
        -0.685, 0.136, 0.9, 0.9, 0.9,
        -0.669, 0.046, 0.9, 0.9, 0.9,

    ];
  
    var right_ = [
        0.1, -0.4,  1, 1, 0.7, 
        0.9, -0.4,  1, 1, 0.7, 
        0, -0.2,  1, 1, 0.7, 

        1, -0.2,  1, 1, 0.7, 
        0.9, -0.4,  1, 1, 0.7, 
        0, -0.2,  1, 1, 0.7,

        0, -0.2, 0.2, 0.2, 0.2,
        0.2, 0.6, 0.2, 0.2, 0.2,
        0.2, -0.2, 0.2, 0.2, 0.2,
  
        0.32, 0.6, 0.2, 0.2, 0.2,
        0.2, 0.6, 0.2, 0.2, 0.2,
        0.2, -0.2, 0.2, 0.2, 0.2,

        0.2, -0.2, 0.9, 0.9, 0.9,
        0.4, -0.2, 0.9, 0.9, 0.9,
        0.32, 0.6, 0.9, 0.9, 0.9,

        0.44, 0.6, 0.9, 0.9, 0.9,
        0.4, -0.2, 0.9, 0.9, 0.9,
        0.32, 0.6, 0.9, 0.9, 0.9,

        0.4, -0.2, 0.0, 0.0, 1,
        1, -0.2, 0.0, 0.0, 1,
        0.44, 0.6, 0.0, 0.0, 1,

        0.8, 0.6, 0.0, 0.0, 1,
        1, -0.2, 0.0, 0.0, 1,
        0.44, 0.6, 0.0, 0.0, 1,

        0.29, 0.4, 0.5, 0.5, 0.5,
        0.43, 0.4, 0.5, 0.5, 0.5,
        0.348, 0.33, 0.5, 0.5, 0.5,

        0.32, 0.6, 0.5, 0.5, 0.5,
        0.44, 0.6, 0.5, 0.5, 0.5,
        0.29, 0.4, 0.5, 0.5, 0.5,
        
        0.29, 0.4, 0.5, 0.5, 0.5,
        0.43, 0.4, 0.5, 0.5, 0.5,
        0.44, 0.6, 0.5, 0.5, 0.5,

        0.346, 0.565, 0.9, 0.9, 0.9,
        0.337, 0.509, 0.9, 0.9, 0.9,
        0.416, 0.565, 0.9, 0.9, 0.9,

        0.412, 0.509, 0.9, 0.9, 0.9,
        0.337, 0.509, 0.9, 0.9, 0.9,
        0.416, 0.565, 0.9, 0.9, 0.9,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.192, 0.499, 0.5, 0.5, 0.5,
        0.195, 0.474, 0.5, 0.5, 0.5,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.192, 0.499, 0.5, 0.5, 0.5,
        0.204, 0.531, 0.5, 0.5, 0.5,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.208, 0.458, 0.5, 0.5, 0.5,
        0.195, 0.474, 0.5, 0.5, 0.5,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.208, 0.458, 0.5, 0.5, 0.5,
        0.235, 0.446, 0.5, 0.5, 0.5,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.264, 0.459, 0.5, 0.5, 0.5,
        0.235, 0.446, 0.5, 0.5, 0.5,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.264, 0.459, 0.5, 0.5, 0.5,
        0.281, 0.485, 0.5, 0.5, 0.5, 

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.2805, 0.511, 0.5, 0.5, 0.5,
        0.281, 0.485, 0.5, 0.5, 0.5,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.2805, 0.511, 0.5, 0.5, 0.5,
        0.268, 0.531, 0.5, 0.5, 0.5, 

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.25, 0.55, 0.5, 0.5, 0.5,
        0.268, 0.531, 0.5, 0.5, 0.5,

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.25, 0.55, 0.5, 0.5, 0.5,
        0.227, 0.548, 0.5, 0.5, 0.5, 

        0.235, 0.499, 0.5, 0.5, 0.5,
        0.205, 0.531, 0.5, 0.5, 0.5,
        0.227, 0.548, 0.5, 0.5, 0.5,

    ];
  
    var vertices = [...left_, ...right_]; 
  
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;
  
    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
  
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
  
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
  
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
  
    var speed = 0.0046;
    var positiony = 0;
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    
    function render() {
        if (positiony > 0.4 || positiony < -0.6) speed = -speed;
        positiony += speed;
        const kiri = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, 0.0, 0.0, 1.0,
        ]
        const kanan = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, positiony, 0.0, 1.0,
        ]
        gl.clearColor(0.35, 0.83, 0.51, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniformMatrix4fv(uTranslate, false, kiri);
        gl.drawArrays(gl.TRIANGLES, 0, left_.length/5);
        gl.uniformMatrix4fv(uTranslate, false, kanan);
        gl.drawArrays(gl.TRIANGLES, left_.length/5, right_.length/5);     
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }